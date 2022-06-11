export interface Blog {
  Title: string;
  subTitle: string;
  slug: string;
  image: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
}
