import React from "react";

const props = {
  results: [
    {
      gender: "female",
      name: { title: "Miss", first: "Aline", last: "Folgerø" },
      location: {
        street: { number: 9975, name: "Trollvannsveien" },
        city: "Nesna",
        state: "Sogn og Fjordane",
        country: "Norway",
        postcode: "0467",
        coordinates: { latitude: "54.5649", longitude: "111.7526" },
        timezone: {
          offset: "-3:00",
          description: "Brazil, Buenos Aires, Georgetown",
        },
      },
      email: "aline.folgero@example.com",
      login: {
        uuid: "0325fe8b-855c-4e2c-93df-635122a060c3",
        username: "yellowgorilla315",
        password: "stripper",
        salt: "wwX6kV3o",
        md5: "e6f91d997baf017a5215fabac802f632",
        sha1: "17949f65db7481af60cef65240204193e0bfac06",
        sha256:
          "4635b1c2de4077f3b0dc575453ea95de72d1c0f50535e17819784cdf6a23da7e",
      },
      dob: { date: "1963-10-19T02:17:36.419Z", age: 57 },
      registered: { date: "2004-02-02T05:10:12.801Z", age: 16 },
      phone: "36030822",
      cell: "93490671",
      id: { name: "FN", value: "19106317871" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/12.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/12.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/12.jpg",
      },
      nat: "NO",
    },
  ],
  info: { seed: "0086f433073e5236", results: 1, page: 1, version: "1.3" },
};
export const Extra = () => {
  return (
    <div className='extra'>
      <img
        src={props.results[0].picture.large}
        className='extra-image'
        alt='extra profile photo'
      />
    </div>
  );
};
