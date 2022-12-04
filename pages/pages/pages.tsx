import { GetStaticProps } from "next";
import { useEffect, useState } from "react";

export default function Categories({ pages }): JSX.Element {
  return (
    <>
      <div>
        <ul>
          {pages.message.map((el: Object) => (
            <li key={el["_id"].secondCategory}>{el["_id"].secondCategory}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const resp = await fetch(process.env.BASE_URL + "/api/pages");
  const pages = await resp.json();

  if (!pages) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pages,
    },
    revalidate: 10,
  };
};
