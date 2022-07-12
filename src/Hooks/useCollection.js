import React, { useState, useEffect } from "react";

export const useCollection = (db, name, getDocs) => {
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    (async () => {
      await getDocs(collection(db, name)).then((res) => {
        setCollection(res);
      });
    })();

    return () => {
      // this now gets called when the component unmounts
    };
  }, [collection]);

  collection.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
  return collection;
};

export default useCollection;
