import About from "./components/About";
import ClickedPostView from "./components/blog/ClickedPostView";
import Posts from "./components/blog/Posts";
import Scene from "./components/three/Scene";

export default function Home() {

  return (
    <main className="flex flex-row ">
      <div className="w-1/4 pl-4 pr-3 pt-16 max-h-screen overflow-y-scroll scrollbar-hidden sticky top-0">
        <div>
          <About></About>
        </div>
        <div className="mt-4">
          <Posts></Posts>
        </div>
      </div>
      <div className="w-3/4 pt-4">
        {/* Check if there is an existing post .. */}
        <ClickedPostView ></ClickedPostView>
        {/*  If not show 3d Emoji */}

      </div>
    </main>
  );
}
