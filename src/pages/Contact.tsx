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
import { MapPin, Mail } from "lucide-react";
import { contactPageData } from "@/data/contact";
import { useLanguage } from "@/contexts/LanguageContext";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address").max(255),
  message: z.string().min(1, "Message is required").max(1000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { dict } = useLanguage();

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
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", data);
    
    toast({
      title: dict.contact.form.success,
      description: dict.contact.form.successDescription,
    });
    
    form.reset();
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
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                  className="w-full bg-gold text-gold-foreground hover:bg-gold/90 font-inter font-medium"
                >
                  {isSubmitting ? dict.contact.form.sending : dict.contact.form.submit}
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="border border-gold/20 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="text-gold mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-playfair font-semibold mb-2">{dict.contact.location}</h3>
                  <p className="text-muted-foreground font-inter">
                    {dict.contact.area}
                  </p>
                  {contactPageData.byAppointmentOnly && (
                    <p className="text-sm text-gold font-inter mt-2">{dict.contact.byAppointment}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-gold mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-playfair font-semibold mb-2">{dict.contact.form.email}</h3>
                  <a
                    href={`mailto:${contactPageData.email}`}
                    className="text-muted-foreground hover:text-gold font-inter transition-colors"
                  >
                    {contactPageData.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-xl font-playfair font-semibold mb-4">{dict.contact.hours.title}</h3>
              <p className="text-muted-foreground font-inter mb-2">
                {dict.contact.hours.text}
              </p>
              <p className="text-sm text-gold font-inter">
                {dict.contact.hours.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
