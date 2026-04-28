import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import Footer from "../sections/Footer";

import personal from '../../data/personal.json';
import experience from '../../data/experience.json';
import projects from '../../data/projects.json';

export default function Scaffold() {
  return (
    <div className="min-h-screen bg-[#0A0F1E]">
      
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
        <div className="lg:flex lg:gap-12 justify-between">

          <aside className="hidden lg:block lg:w-[40%]">
            <div className="sticky top-0 flex h-screen flex-col justify-between py-24">
                <LeftPanel 
                  personal={personal}
                />
            </div>
          </aside>

          <main className="lg:w-[50%] lg:pt-24 ml-auto">
            <RightPanel
              longDescription={personal.longDescription}
              projects={projects}
              experience={experience}
            />
          </main>

        </div>
      </div>
      <Footer
          name={personal.name}
        />
    </div>
  );
}