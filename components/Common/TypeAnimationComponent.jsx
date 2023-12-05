
import Typewriter from "react-ts-typewriter";

export default function TypeAnimationComponent() {
    const words = ['Summary News.', 'Analyze Data.', 'Embrace AI ...']
    return (
        <div className="relative dark:white">
                <div className="inline-block absolute inset-y-0 left-1/2 transform -translate-x-1/2">
                    <div
                        className="text-2xl lg:text-5xl md:text-4xl sm:text-3xl relative"
                    >
                        <Typewriter
                            text={words}
                            loop="true"
                            speed="3"
                        ></Typewriter>
                    </div>

                </div>
        </div>
    )
}