import { FC } from 'react';

interface Props {
  title: string;
  dateString: string;
  mainImageUrl: string;
}

const BlogHeaderComponent: FC<Props> = ({
  title,
  dateString,
  mainImageUrl,
}) => {
  return (
    <div style={{ width: '600px', margin: 'auto', padding: "20px" }}>
      <img style={{ width: '600px' }} className="main-image" src={mainImageUrl} />
      <h1 className="text-bold text-9xl text-center p-10">{title}</h1>
      <p className="text-center p-10">Posted on {dateString}</p>
    </div>
  );
};

export default BlogHeaderComponent;
