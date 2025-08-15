import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 2 hours.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="pt-24 pb-16">
        <section className="py-24 hero-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Thank You!</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Your message has been sent successfully. We'll get back to you within 2 hours with a detailed response.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-primary-500 to-accent-400 text-white px-8 py-4 rounded-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 font-semibold text-lg"
              data-testid="button-send-another"
            >
              Send Another Message
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-24 hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Let's Build Something Amazing</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Ready to transform your business with cutting-edge digital solutions? Let's discuss your project and create a roadmap to success.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Send Us a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">First Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John"
                              className="bg-dark-900 border-gray-600 text-white placeholder-gray-400 focus:border-accent-400"
                              data-testid="input-first-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Last Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Doe"
                              className="bg-dark-900 border-gray-600 text-white placeholder-gray-400 focus:border-accent-400"
                              data-testid="input-last-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Email Address *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@company.com"
                            className="bg-dark-900 border-gray-600 text-white placeholder-gray-400 focus:border-accent-400"
                            data-testid="input-email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Company</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Company"
                            className="bg-dark-900 border-gray-600 text-white placeholder-gray-400 focus:border-accent-400"
                            data-testid="input-company"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Service Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger 
                              className="bg-dark-900 border-gray-600 text-white focus:border-accent-400"
                              data-testid="select-service"
                            >
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-dark-900 border-gray-600">
                            <SelectItem value="data-automation">Data Automation</SelectItem>
                            <SelectItem value="ai-web-development">AI Web Development</SelectItem>
                            <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                            <SelectItem value="social-media">Social Media Management</SelectItem>
                            <SelectItem value="ai-integration">AI Integration</SelectItem>
                            <SelectItem value="chatbot">Chatbot Development</SelectItem>
                            <SelectItem value="web-scraping">Web Scraping & Data Extraction</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Project Details *</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                            className="bg-dark-900 border-gray-600 text-white placeholder-gray-400 focus:border-accent-400 resize-none"
                            data-testid="textarea-message"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full bg-gradient-to-r from-primary-500 to-accent-400 text-white px-8 py-4 rounded-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 font-semibold text-lg"
                    data-testid="button-send-message"
                  >
                    {submitMutation.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-gradient">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Email Us</div>
                      <div className="text-gray-300" data-testid="text-contact-email">hello@ikonnectservice.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Call Us</div>
                      <div className="text-gray-300" data-testid="text-contact-phone">+1 (555) 123-4567</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Visit Us</div>
                      <div className="text-gray-300" data-testid="text-contact-address">
                        123 Innovation Street<br />
                        Tech District, CA 94102
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-gradient">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-white font-medium" data-testid="text-hours-weekdays">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white font-medium" data-testid="text-hours-saturday">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gray-400" data-testid="text-hours-sunday">Closed</span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="glass-effect p-6 rounded-2xl">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div>
                    <div className="font-semibold text-white">Quick Response</div>
                    <div className="text-sm text-gray-300">We typically respond within 2 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gradient">Frequently Asked Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-3">How quickly can you start my project?</h3>
              <p className="text-gray-300">
                We typically begin new projects within 1-2 weeks of contract signing. However, for urgent requirements, we can often accommodate faster start times.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-3">Do you provide ongoing support after project completion?</h3>
              <p className="text-gray-300">
                Yes, we offer comprehensive support packages including monitoring, maintenance, updates, and optimization to ensure your solution continues to perform at its best.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-3">What is your typical project timeline?</h3>
              <p className="text-gray-300">
                Project timelines vary based on complexity and scope. Simple automation projects may take 4-6 weeks, while comprehensive AI solutions can take 3-6 months. We provide detailed timelines during our initial consultation.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-3">Can you work with our existing systems?</h3>
              <p className="text-gray-300">
                Absolutely. We specialize in integrating new solutions with existing infrastructure and can work with virtually any technology stack or platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
