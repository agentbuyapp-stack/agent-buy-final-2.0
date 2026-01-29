type AnimatedIconsHomeProps = {
  style: string;
  classname: string;
  imgURL: string;
};
export const AnimatedIconsHome = ({
  style,
  classname,
  imgURL,
}: AnimatedIconsHomeProps) => {
  return (
    <div className={`${classname}`} style={{ animation: `${style}` }}>
      <img
        src={`${imgURL}`}
        alt=""
        className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl opacity-90"
      />
    </div>
  );
};
