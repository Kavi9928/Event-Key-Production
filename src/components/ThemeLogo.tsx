'use client';

import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

interface ThemeLogoProps {
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function ThemeLogo({ 
  width = 200, 
  height = 75, 
  className = "h-16 w-auto",
  priority = false 
}: ThemeLogoProps) {
  const { theme, mounted } = useTheme();

  // Show light logo in dark mode, dark logo in light mode
  const logoSrc = mounted && theme === 'light' ? '/logo-dark.png' : '/logo-light.png';

  return (
    <Image
      src={logoSrc}
      alt="Key Production"
      width={width}
      height={height}
      className={`${className} transition-opacity duration-300`}
      priority={priority}
    />
  );
}
