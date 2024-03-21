import { Inter } from "next/font/google";
import "./globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import ReactQueryProvider from "@/utils/ReactQueryProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#b65128" initialPosition={0.3}/>
        <ReactQueryProvider>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={4000}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
