import "./globals.css";
import { PathProvider } from "@/context/PathContext";
import UIOverlay from "@/components/UIOverlay";
import ThemeWrapper from "@/components/ThemeWrapper";
import { TransitionProvider } from "@/context/TransitionContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { XPProvider } from "@/context/XPContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <XPProvider>
          <LanguageProvider>
            <PathProvider>
              <TransitionProvider>
                <ThemeWrapper>
                  {children}
                  <UIOverlay />
                </ThemeWrapper>
              </TransitionProvider>
            </PathProvider>
          </LanguageProvider>
        </XPProvider>
      </body>
    </html>
  );
}