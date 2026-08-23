import { useState } from "react";
import { Share2, X } from "lucide-react";

interface SocialShareButtonProps {
  type: "research" | "outcome";
  image: string;
  title: string;
  description: string;
  disclaimer?: string;
  url: string;
}

export default function SocialShareButton({
  type,
  image,
  title,
  description,
  disclaimer,
  url,
}: SocialShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [shareDescription, setShareDescription] = useState(description);

  return (
    <>
      {/* Share Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-black text-text-s hover:text-accent transition-colors"
      >
        <Share2 size={14} />
        Share
      </button>

      {/* Share Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-panel border border-white/10 p-6 sm:p-8">

            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              aria-label="Close share modal"
            >
              <X size={20} />
            </button>

            {/* Heading */}
            <div className="mb-6 pr-8">
              <div className="text-[10px] uppercase tracking-[0.2em] text-accent font-black mb-2">
                Share
              </div>

              <h2 className="text-2xl font-serif font-bold text-white">
                {type === "research" ? "Research" : "Outcome"}
              </h2>
            </div>

            {/* Preview */}
            <div className="border border-white/10 bg-black/20 overflow-hidden">

              {/* Image */}
              <div className="aspect-video overflow-hidden bg-black">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-5">

                <div>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-text-s mb-2">
                    Title
                  </div>

                  <div className="text-white font-bold">
                    {title}
                  </div>
                </div>

                <div>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-text-s mb-2">
                    Description
                  </div>

                  <textarea
  value={shareDescription}
  onChange={(e) => setShareDescription(e.target.value)}
  className="w-full min-h-[120px] bg-black/30 border border-white/10 p-3 text-white/80 text-sm leading-relaxed outline-none focus:border-accent/50 resize-y"
  placeholder="Share description"
/>                </div>

                {/* Disclaimer — Research only */}
                {type === "research" && disclaimer && (
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.2em] text-text-s mb-2">
                      Disclaimer
                    </div>

                    <div className="text-red-400 text-sm italic leading-relaxed">
                      {disclaimer}
                    </div>
                  </div>
                )}

                <div>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-text-s mb-2">
                    URL
                  </div>

                  <div className="text-accent text-sm break-all">
                    {url}
                  </div>
                </div>

              </div>
            </div>

       <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
  <button
  onClick={() => {
    const shareText =
      type === "research"
        ? `RESEARCH\n${title}\n\n${shareDescription}\n\n${disclaimer || ""}`
        : `OUTCOME\n\n${title}\n\n${shareDescription}`;

    const slug =
      url.split("/analysis/")[1] || "";

    const socialPreviewUrl =
      `${window.location.origin}/api/twitter-card?slug=` +
      encodeURIComponent(slug);

    const xUrl =
      `https://twitter.com/intent/tweet?text=` +
      encodeURIComponent(shareText) +
      `&url=` +
      encodeURIComponent(socialPreviewUrl);

    window.open(
      xUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }}
  className="px-4 py-3 border border-white/10 text-white hover:border-accent/60 hover:text-accent text-[10px] uppercase tracking-[0.15em] font-black transition-all"
>
  X / Twitter
</button>

  <button
    disabled
    className="px-4 py-3 border border-white/10 text-white/40 text-[10px] uppercase tracking-[0.15em] font-black cursor-not-allowed"
  >
    Instagram
  </button>

  <button
    disabled
    className="px-4 py-3 border border-white/10 text-white/40 text-[10px] uppercase tracking-[0.15em] font-black cursor-not-allowed"
  >
    Substack
  </button>
</div>

          </div>
        </div>
      )}
    </>
  );
}