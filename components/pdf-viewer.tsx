"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { twMerge } from "tailwind-merge";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFViewer(props: {
  file: File | string | ArrayBuffer | Uint8Array;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
}) {
  const [pageWidth, setPageWidth] = useState(0);

  function onPageLoadSuccess() {
    setPageWidth(window.innerWidth);
    props.setIsLoading(false);
  }

  const options = {
    cMapUrl: "cmaps/",
    cMapPacked: true,
    standardFontDataUrl: "standard_fonts/",
  };

  return (
    <div
      style={{ height: "calc(100vh - 120px)" }}
      className={twMerge(
        "flex items-center transition-all duration-[2000ms] bg-[blue]",
        props.isLoading ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="h-full flex justify-center mx-auto">
        <Document
          file={props.file}
          options={options}
          renderMode="canvas"
          loading=""
        >
          <Page
            loading=""
            key={1}
            height={100}
            pageNumber={1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            onLoadSuccess={onPageLoadSuccess}
            width={Math.max(pageWidth * 0.8, 390)}
          />
        </Document>
      </div>
    </div>
  );
}
