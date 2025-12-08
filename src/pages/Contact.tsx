import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SectionHeading from "@/components/SectionHeading";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { contactPageData } from "@/data/contact";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

// Localized validation messages
const getContactSchema = (language: "da" | "en") => {
  const messages = {
    da: {
      nameRequired: "Navn er påkrævet",
      emailInvalid: "Ugyldig e-mailadresse",
      messageRequired: "Besked er påkrævet",
    },
    en: {
      nameRequired: "Name is required",
      emailInvalid: "Invalid email address",
      messageRequired: "Message is required",
    },
  };

  const m = messages[language];

  return z.object({
    name: z.string().min(1, m.nameRequired).max(100),
    email: z.string().email(m.emailInvalid).max(255),
    message: z.string().min(1, m.messageRequired).max(1000),
  });
};

type ContactFormValues = z.infer<ReturnType<typeof getContactSchema>>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { dict, language } = useLanguage();
  useSEO("contact");

  const contactSchema = getContactSchema(language);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      const formData = new URLSearchParams();
      formData.append("form-name", "contact");
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      if (response.ok) {
        toast({
          title: dict.contact.form.success,
          description: dict.contact.form.successDescription,
        });
        form.reset();
      } else {
        toast({
          title: language === "da" ? "Fejl" : "Error",
          description: language === "da" 
            ? "Der opstod en fejl. Prøv venligst igen." 
            : "An error occurred. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: language === "da" ? "Fejl" : "Error",
        description: language === "da" 
          ? "Der opstod en fejl. Prøv venligst igen." 
          : "An error occurred. Please try again.",
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={dict.contact.eyebrow}
          title={dict.contact.title}
          subtitle={dict.contact.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-netlify="true" name="contact">
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter">{dict.contact.form.name}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={dict.contact.form.name}
                          className="border-gold/20 focus:border-gold font-inter"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter">{dict.contact.form.email}</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={dict.contact.form.email}
                          className="border-gold/20 focus:border-gold font-inter"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-inter">{dict.contact.form.message}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={dict.contact.form.messagePlaceholder}
                          className="border-gold/20 focus:border-gold font-inter min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold text-gold-foreground hover:bg-gold/90 font-inter font-medium min-h-[44px] text-sm sm:text-base"
                >
                  {isSubmitting ? dict.contact.form.sending : dict.contact.form.submit}
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="border border-gold/20 rounded-2xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold mt-1 flex-shrink-0" size={24} />
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-playfair font-semibold mb-2">{dict.contact.location}</h3>
                  <p className="text-muted-foreground font-inter">
                    {contactPageData.address.street}
                  </p>
                  <p className="text-muted-foreground font-inter">
                    {contactPageData.address.city}
                  </p>
                  <p className="text-muted-foreground font-inter">
                    {dict.contact.country}
                  </p>
                  {contactPageData.byAppointmentOnly && (
                    <p className="text-sm text-gold font-inter mt-2">{dict.contact.byAppointment}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-gold mt-1 flex-shrink-0" size={24} />
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-playfair font-semibold mb-2">{dict.contact.phone}</h3>
                  <a
                    href={`tel:${contactPageData.phone.replace(/\s/g, '')}`}
                    className="text-muted-foreground hover:text-gold font-inter transition-colors text-sm sm:text-base"
                  >
                    {contactPageData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-gold mt-1 flex-shrink-0" size={24} />
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-playfair font-semibold mb-2">{dict.contact.form.email}</h3>
                  <a
                    href={`mailto:${contactPageData.email}`}
                    className="text-muted-foreground hover:text-gold font-inter transition-colors break-all text-sm sm:text-base"
                  >
                    {contactPageData.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <Clock className="text-gold mt-1 flex-shrink-0" size={24} />
                <h3 className="text-lg sm:text-xl font-playfair font-semibold">{dict.contact.hours.title}</h3>
              </div>
              <div className="space-y-2 font-inter text-sm sm:text-base text-muted-foreground ml-0 sm:ml-10">
                <div className="flex justify-between gap-4">
                  <span className="flex-shrink-0">{dict.footer.monday} - {dict.footer.friday}:</span>
                  <span className="text-right">{contactPageData.hours.monday}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="flex-shrink-0">{dict.footer.saturday}:</span>
                  <span className="text-right">{contactPageData.hours.saturday}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="flex-shrink-0">{dict.footer.sunday}:</span>
                  <span className="text-gold text-right">{dict.footer.closed}</span>
                </div>
              </div>
              {contactPageData.byAppointmentOnly && (
                <p className="text-sm text-gold font-inter mt-4 ml-10">
                  {dict.contact.byAppointment}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
