"use client";

import React from 'react';
import { Github, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="text-center mb-6 animate-fade-in-up">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
        文件快传
      </h1>
      <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed px-4 mb-3">
        <span className="text-xs sm:text-sm text-slate-500">请保持设备在同一网络环境下</span>
      </p>
           
      {/* 分割线 */}
      <div className="w-full max-w-2xl h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 mx-auto mt-2 mb-2 opacity-60"></div>
    </div>
  );
}
