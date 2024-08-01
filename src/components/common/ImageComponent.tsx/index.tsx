import Image from "next/image";

interface IProps {
  src: any;
  width?: number;
  height?: number;
  className?: string;
  figClassName?: string;
  alt?: string;
  size?: string;
  blurEffect?: boolean;
  priority?: boolean;
  layout?: any;
  fill?: boolean;
}

const ImageComponent = ({
  src,
  width,
  height,
  className,
  figClassName,
  alt,
  layout,
  fill,
  blurEffect,
  size,
  priority,
  ...rest
}: IProps) => {
  return (
    <>
      <figure
        className={`relative leading-0 ${figClassName ? figClassName : ""}`}
      >
        <Image
          src={src}
          width={width}
          height={height}
          fill={fill}
          sizes={
            size
              ? size
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          }
          className={className}
          placeholder={blurEffect ? "blur" : "empty"}
          blurDataURL={`/_next/image?url=${src}&w=16&q=1`}
          alt={alt ? alt : "Image"}
          layout={layout}
          priority={priority}
          {...rest}
        />
      </figure>
    </>
  );
};

export default ImageComponent;
