import React from 'react';
import { Facebook, Instagram, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-custom-red text-white py-10">
        <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-center md:text-left">
                        <a href="#" className="hover:underline">Правовая информация</a>
                        <a href="#" className="hover:underline">Карта сайта</a>
                <a href="#" className="hover:underline">Уведомление о рисках</a>
            </div>
            <div className="flex space-x-4">
                        <a href="#" className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full hover:bg-white/20">
                            <Facebook className="h-6 w-6" />
              </a>
                        <a href="#" className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full hover:bg-white/20">
                            <Instagram className="h-6 w-6" />
              </a>
                        <a href="#" className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full hover:bg-white/20">
                            <Send className="h-6 w-6" />
              </a>
            </div>
          </div>
                <div className="mt-10 md:mt-16 text-sm text-center md:text-left">
                    © <span className="font-n27">2025</span> IWM
          </div>
        </div>
      </footer>
    );
};

export default Footer;
