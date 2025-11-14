"use client";
import Image, { type ImageProps } from "next/image";
import { useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Brain, LineChart, Lightbulb, Check } from "lucide-react";
import { useEffect } from "react";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

export default function Home() {
  const { user, isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    if (!isLoaded || !isSignedIn) return;

    // call your endpoint only once after login
    fetch("/api/addUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user,
      }),
    });
  }, [isLoaded, isSignedIn, user]);

  if (!isLoaded) return <div>Loading...</div>;
  if (!user) return <div>You are not signed in</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight text-gray-900 ">
              Gain clarity in your founder journey
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium text-gray-900">
              EchoMind is an AI powered reflection tool that remembers your
              emotional patterns, recalls similar past challenges, and gives
              insights that help you make better decisions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all h-14"
            >
              Start free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 hover:bg-muted h-14"
            >
              View demo
            </Button>
          </div>

          {/* Chat UI Mockup */}
          <Card className="mt-16 overflow-hidden max-w-4xl w-full shadow-[0_0_50px_rgba(99,102,241,0.15)] border-primary/20 animate-fade-in-delay bg-background">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-sm font-medium text-foreground/70">
                  EchoMind Chat
                </span>
              </div>
            </div>

            <div className="p-8 space-y-6 bg-background min-h-[400px]">
              {/* User Message */}
              <div className="flex justify-end">
                <div className="max-w-[80%] bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-6 py-4 shadow-md">
                  <p className="text-base leading-relaxed">
                    I'm feeling overwhelmed about our product direction. We've
                    been iterating for 3 months but I still don't feel confident
                    about market fit.
                  </p>
                  <span className="text-xs opacity-70 mt-2 block">2:34 PM</span>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex justify-start">
                <div className="max-w-[85%] bg-muted/80 text-foreground rounded-2xl rounded-tl-sm px-6 py-4 shadow-md border border-border/50">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">
                      Memory Match Found
                    </span>
                  </div>
                  <p className="text-base leading-relaxed mb-4">
                    I found 2 similar moments from your past reflections. In
                    August, you felt the same uncertainty before your pivot to
                    B2B — which ultimately worked well.
                  </p>
                  <p className="text-base leading-relaxed text-foreground/90">
                    What specifically is making you doubt the current direction?
                  </p>
                  <span className="text-xs text-muted-foreground mt-2 block">
                    2:34 PM
                  </span>
                </div>
              </div>

              {/* User Follow-up */}
              <div className="flex justify-end">
                <div className="max-w-[75%] bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-6 py-4 shadow-md">
                  <p className="text-base leading-relaxed">
                    The customer feedback is mixed. Some love it, others don't
                    see the value.
                  </p>
                  <span className="text-xs opacity-70 mt-2 block">2:36 PM</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 space-y-4 shadow-lg hover:shadow-[0_8px_30px_rgba(99,102,241,0.2)] transition-all duration-300 hover:-translate-y-1 border-border/50 bg-background">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Brain className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Meaning based memory recall
            </h3>
            <p className="text-base text-foreground/75 leading-relaxed">
              EchoMind finds similar past reflections when you type something
              new, helping you avoid repeating the same mistakes.
            </p>
          </Card>

          <Card className="p-8 space-y-4 shadow-lg hover:shadow-[0_8px_30px_rgba(99,102,241,0.2)] transition-all duration-300 hover:-translate-y-1 border-border/50 bg-background">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
              <LineChart className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Mood and stress tracking
            </h3>
            <p className="text-base text-foreground/75 leading-relaxed">
              Every message is labeled with mood and theme so founders can
              understand emotional patterns over time.
            </p>
          </Card>

          <Card className="p-8 space-y-4 shadow-lg hover:shadow-[0_8px_30px_rgba(99,102,241,0.2)] transition-all duration-300 hover:-translate-y-1 border-border/50 bg-background">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Lightbulb className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Decision clarity
            </h3>
            <p className="text-base text-foreground/75 leading-relaxed">
              EchoMind analyzes past decision moments and compares them with
              your current state so you gain deeper insight.
            </p>
          </Card>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual Mockup */}
          <Card className="p-6 shadow-xl border-primary/20 bg-background">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-border/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                <div>
                  <p className="font-semibold text-foreground">EchoMind AI</p>
                  <p className="text-sm text-muted-foreground">
                    Your clarity companion
                  </p>
                </div>
              </div>

              <div className="space-y-3 py-4">
                <div className="bg-muted/60 rounded-lg p-4 border border-border/30">
                  <p className="text-sm font-medium text-foreground/90 mb-2">
                    Pattern Detected
                  </p>
                  <p className="text-base text-foreground/80">
                    You've mentioned "hiring challenges" in 4 previous
                    reflections over the past 2 months.
                  </p>
                </div>

                <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm font-medium text-primary mb-2">
                    Similar Moment
                  </p>
                  <p className="text-base text-foreground/80">
                    On June 15th, you faced a similar decision about team
                    expansion. You chose to hire slowly — it worked well.
                  </p>
                </div>

                <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                  <p className="text-sm font-medium text-accent mb-2">
                    Insight
                  </p>
                  <p className="text-base text-foreground/80">
                    Your stress decreased by 40% after making structured hiring
                    decisions in the past.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Your thoughts now have a memory
            </h2>
            <p className="text-lg text-foreground/75 leading-relaxed">
              EchoMind uses advanced vector search to find semantically similar
              reflections from your past. Every message is embedded and indexed
              so you can discover patterns you didn't know existed.
            </p>

            <ul className="space-y-3">
              {[
                "High quality embeddings for every message",
                "Instant similarity search across your history",
                "Personalized insight prompts based on context",
                "Pattern recognition over time",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-4">
              <Badge variant="secondary" className="px-3 py-1 text-sm">
                PostgreSQL
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 text-sm">
                pgvector
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 text-sm">
                React
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 text-sm">
                AI Embeddings
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Story */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            A week with EchoMind
          </h2>

          <div className="relative space-y-12">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />

            {[
              {
                day: "Day 1",
                title: "Reflection",
                description:
                  "Founder feels anxious about upcoming product launch. EchoMind detects elevated stress levels in the tone and keywords.",
                icon: Brain,
              },
              {
                day: "Day 3",
                title: "Memory Match",
                description:
                  "Founder writes about investor pressure. EchoMind matches two similar reflections from previous fundraising rounds.",
                icon: Lightbulb,
              },
              {
                day: "Day 7",
                title: "Weekly Summary",
                description:
                  "EchoMind generates a weekly insight showing stress patterns decreased by 35% and highlights 3 resolved challenges.",
                icon: LineChart,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-6 items-start animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <Card className="flex-1 p-6 shadow-lg border-border/50 bg-background">
                  <div className="text-sm font-bold text-primary mb-1">
                    {item.day}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-base text-foreground/75 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          What founders say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Sarah Chen",
              location: "Toronto",
              initial: "S",
              quote:
                "EchoMind helped me identify stress patterns I didn't even know I had. My decision-making improved dramatically after understanding my emotional cycles.",
              color: "from-blue-500 to-cyan-500",
            },
            {
              name: "Amir Hassan",
              location: "Chicago",
              initial: "A",
              quote:
                "The memory recall feature is incredible. It's like having a co-founder who remembers every challenge you've faced and helps you learn from it.",
              color: "from-violet-500 to-purple-500",
            },
            {
              name: "Jonas Schmidt",
              location: "Berlin",
              initial: "J",
              quote:
                "I reduced my stress by 40% in just two weeks. EchoMind gave me clarity when I needed it most during our Series A raise.",
              color: "from-indigo-500 to-blue-500",
            },
          ].map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 space-y-6 shadow-lg border-border/50 bg-background hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <Avatar
                  className={`w-14 h-14 border-2 border-border bg-gradient-to-br ${testimonial.color}`}
                >
                  <AvatarFallback className="bg-transparent text-white text-xl font-bold">
                    {testimonial.initial}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold text-foreground text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </div>
              <p className="text-base text-foreground/80 leading-relaxed">
                "{testimonial.quote}"
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing/Early Access */}
      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-3xl mx-auto p-12 text-center space-y-6 shadow-[0_0_50px_rgba(99,102,241,0.15)] border-primary/20 bg-gradient-to-br from-background to-muted/30">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            EchoMind is free during Hackathon week
          </h2>
          <p className="text-xl text-foreground/75 max-w-2xl mx-auto">
            Start your journey to clarity today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all h-14"
            >
              Try it now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 hover:bg-muted h-14"
            >
              Join waitlist
            </Button>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              EchoMind
            </div>
            <nav className="flex flex-wrap gap-8 text-base">
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Contact
              </a>
              <a
                href="#privacy"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Privacy
              </a>
              <a
                href="#terms"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Terms
              </a>
              <a
                href="#github"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                GitHub
              </a>
            </nav>
          </div>
          <Separator className="my-8" />
          <p className="text-center text-sm text-muted-foreground">
            © 2025 EchoMind. Built for founders who want clarity.
          </p>
        </div>
      </footer>
    </div>
  );
}
