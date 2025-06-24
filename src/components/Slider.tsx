import { Slider, SliderProps } from "tamagui";

function SimpleSlider({ children, ...props }: SliderProps) {
    return (
        <Slider defaultValue={[50]} max={100} step={1} {...props}>
            <Slider.Track backgroundColor={'#0000001a'}>
                <Slider.TrackActive backgroundColor={'#0000001a'} />
            </Slider.Track>
            <Slider.Thumb size="$1.5" index={0} circular backgroundColor={'#0280f6'} borderColor={'#0280f6'} />
            {children}
        </Slider>
    )
}

export default SimpleSlider