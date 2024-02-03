import img1 from "../assets/images/bgPattern.png";
import img2 from "../assets/images/honey-comb.png";

import { ParallaxBanner } from 'react-scroll-parallax';


export default function BannerComponent() {
    return (
        <ParallaxBanner
            layers={[
                { image: img1, speed: -20 },
                {
                    speed: -15,
                    children: (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-8xl text-white font-thin">Hello World!</h1>
                        </div>
                    ),
                },
                { image: img2, speed: -10 },
            ]}
            className="aspect-[2/1]"
        />
    );
};