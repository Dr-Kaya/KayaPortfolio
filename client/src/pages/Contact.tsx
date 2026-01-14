import { useSendMessage } from "@/hooks/use-messages";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const { mutate: sendMessage, isPending } = useSendMessage();

  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertMessage) => {
    sendMessage(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-card p-8 rounded-3xl border border-white/5 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="bg-background/50 border-white/10 focus:border-primary/50 min-h-[50px]" 
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your@email.com" 
                            type="email"
                            className="bg-background/50 border-white/10 focus:border-primary/50 min-h-[50px]" 
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
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project..." 
                            className="bg-background/50 border-white/10 focus:border-primary/50 min-h-[150px] resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isPending}
                    className="w-full h-12 rounded-xl text-base font-semibold bg-white text-black hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-8 flex flex-col justify-center"
            >
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-card/50 border border-white/5 hover:bg-card transition-colors">
                <div className="p-4 bg-primary/10 rounded-full text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email</h4>
                  <p className="text-muted-foreground mb-2">My inbox is always open.</p>
                  <a href="mailto:erdogan.kaya@example.com" className="text-white hover:text-primary transition-colors font-medium">
                    erdogan.kaya@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 rounded-2xl bg-card/50 border border-white/5 hover:bg-card transition-colors">
                <div className="p-4 bg-accent/10 rounded-full text-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Location</h4>
                  <p className="text-muted-foreground mb-2">Currently available for remote work.</p>
                  <span className="text-white font-medium">
                    San Francisco, CA
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 rounded-2xl bg-card/50 border border-white/5 hover:bg-card transition-colors">
                <div className="p-4 bg-green-500/10 rounded-full text-green-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Schedule a Call</h4>
                  <p className="text-muted-foreground mb-2">Prefer to talk? Let's schedule a meeting.</p>
                  <a href="#" className="text-white hover:text-primary transition-colors font-medium">
                    Book a 15 min intro
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
