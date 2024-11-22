"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ButtonGoUp = () => {
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el botón si no estamos en el top
      setShowButton(window.scrollY > 0);
    };

    // Escuchar al evento scroll
    window.addEventListener("scroll", handleScroll);

    // Limpieza: remover el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    return new Promise((resolve) => {
      const checkIfScrollFinished = () => {
        if (Math.abs(window.scrollY - 0) <= 1) {
          resolve();
        } else {
          requestAnimationFrame(checkIfScrollFinished);
        }
      };

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      checkIfScrollFinished();
    });
  };

  const handleScrollToTopAndResetURL = async () => {
    await scrollToTop(); // Espera a que termine el desplazamiento
    router.replace("/"); // Actualiza la URL
  };
  return (
    <div
      style={{
        opacity: showButton ? 1 : 0, // Opacidad controlada por el estado
        transform: showButton ? "scale(1)" : "scale(0.9)", // Efecto de zoom
        transition: "opacity 0.3s ease, transform 0.3s ease", // Animación suave
        pointerEvents: showButton ? "auto" : "none", // Evita clics cuando no es visible
      }}
      className="fixed w-10 h-10 rounded-full bottom-6 right-6 bg-gradient-to-br from-green-500 via-green-300 to-cyan-200 cursor-pointer z-10"
      onClick={handleScrollToTopAndResetURL}>
      <Image
        className="-rotate-90 justify-self-center"
        src="/images/arrow.png"
        alt="arrow icon"
        width={35}
        height={35}
      />
    </div>
  );
};

export default ButtonGoUp;
