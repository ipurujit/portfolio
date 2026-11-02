import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { SocialLinks } from '../components/SocialLinks';
import { MapPin, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { data } = usePortfolio();
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section
      id="about"
      aria-label={data.navigation.about}
      className="py-12 sm:py-16 md:py-20 border-b border-zinc-200 dark:border-zinc-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Photo Column - square photo sized for a 5-inch smartphone (approx 240px-280px max) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 aspect-square-2xl overflow-hidden border-2 border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 shadow-md">
              {!imgError ? (
                <img
                  src={data.meta.avatarPhotoUrl}
                  alt={data.meta.avatarAlt}
                  referrerPolicy="no-referrer"
                  onLoad={() => setImgLoaded(true)}
                  onError={() => setImgError(true)}
                  className={`w-full h-full object-cover contrast-110 transition-opacity duration-500 ${
                    imgLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ) : null}

              {/* High-fidelity monochromatic avatar fallback if avatar is not yet added */}
              {(imgError || !imgLoaded) && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900 text-white p-6 text-center select-none"
                  aria-hidden="true"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 border border-zinc-700 flex items-center justify-center bg-zinc-800/80 mb-3 shadow-inner">
                    <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-300" />
                  </div>
                  <span className="font-bold text-lg tracking-tight text-white">
                    {data.meta.name}
                  </span>
                  <span className="text-sm text-zinc-400 mt-0.5">
                    {data.meta.fallbackTitle}
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono mt-3 uppercase tracking-wider">
                    {data.meta.fallbackLocation}
                  </span>
                </div>
              )}
            </div>
            <p className="mt-4 border border-amber-300 dark:border-amber-700 bg-amber-100 dark:bg-amber-950/40 px-3 py-2 text-md font-semibold text-amber-950 dark:text-amber-200 text-center whitespace-pre-wrap">
              {data.meta.openToWorkCTA}
            </p>
          </div>

          {/* Bio & Details Column */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-sm font-mono text-zinc-800 dark:text-zinc-300 mb-3">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{data.meta.location}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
                {data.meta.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-zinc-700 dark:text-zinc-300 mt-2">
                {data.meta.title}
              </p>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-wrap">
              {data.meta.bio}
            </p>

            {/* Social Media Link Icons with labels */}
            <div className="pt-2">
              <span className="block text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                {data.ui.profilesLinksLabel}
              </span>
              <SocialLinks showLabels={true} iconSize={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
