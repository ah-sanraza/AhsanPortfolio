import React from "react";

interface ShareButtonProps {
  title: string;
  url: string;
}

export default function ShareButton({ title, url }: ShareButtonProps) {
  const handleShare = async () => {
    const shareData = {
      title,
      text: title,
      url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log("Share cancelled");
      }
    } else {
      await navigator.clipboard.writeText(url);
      alert("Link copied!");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="px-4 py-2 rounded-lg bg-blue-600 text-white"
    >
      Share
    </button>
  );
}