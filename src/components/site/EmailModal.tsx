import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Send } from "lucide-react";
import { Field } from "@/components/site/FormFields";

export function EmailModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setLoading(false);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-[100] grid place-items-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="w-full max-w-md pointer-events-auto"
            >
              <div className="relative glass-card p-7 shadow-2xl">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface transition-colors text-muted-foreground hover:text-foreground z-10"
                >
                  <X className="size-4" />
                </button>

                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto size-14 rounded-full bg-brand-gradient grid place-items-center text-primary-foreground shadow-lg shadow-[var(--brand)]/20">
                      <Check className="size-7" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">Message sent.</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      We'll be in touch within one business day.
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-6 btn-secondary inline-flex"
                    >
                      Close window
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6 pr-8">
                      <h2 className="text-xl font-semibold tracking-tight">Send an email</h2>
                      <p className="mt-1 text-sm text-muted-foreground">We'll reply to your message as soon as possible.</p>
                    </div>
                    <form onSubmit={async (e) => {
                      e.preventDefault();
                      setLoading(true);
                      const formData = new FormData(e.currentTarget);
                      try {
                        await fetch("https://formsubmit.co/ajax/hello@gladstudio.net", {
                          method: "POST",
                          headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                          },
                          body: JSON.stringify(Object.fromEntries(formData))
                        });
                        setSubmitted(true);
                      } catch (error) {
                        console.error(error);
                        alert("Something went wrong. Please try again.");
                      } finally {
                        setLoading(false);
                      }
                    }} className="space-y-4">
                      <Field label="Name" name="name" placeholder="Your name" required />
                      <Field label="Your email address" name="email" type="email" placeholder="you@company.com" required />
                      <Field label="Message" name="message" textarea placeholder="How can we help?" required />

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full btn-primary justify-center mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? "Sending..." : "Send message"} <Send className="size-4 ml-1" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
