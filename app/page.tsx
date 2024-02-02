import React from "react";
import Navbar from "@/components/navbar";
import MainContent from "@/components/mainContent";
function Home() {
  return (
    <main>
      <div className="m-2 font-mono h-fit">
        <Navbar />
        <MainContent />
      </div>
    </main>
  );
}

export default Home;
