import "./globals.css";
import { PathProvider } from "@/context/PathContext";
import BonfireMenu from "@/components/BonfireMenu";
import ThemeWrapper from "@/components/ThemeWrapper";
import { TransitionProvider } from "@/context/TransitionContext";
import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <LanguageProvider>
        <PathProvider>
          <TransitionProvider>
            <ThemeWrapper>
              {children}
              <BonfireMenu />
            </ThemeWrapper>
          </TransitionProvider>
        </PathProvider>
      </LanguageProvider>
      </body>
    </html>
  );
}