import axios from "axios";

const api = axios.create({
  baseURL: "https://shooliniuniversity.com",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

const fetchProgramData = (id) => {
  return fetch("https://shooliniuniversity.com/media/GetHprogramAPI", {
    method: "post",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      auth: "shoolini@999",
      url: id,
    }),
  }).then((response) => response.json());
};






export const NavLink = async () => {
  const response = await api.post("/media/GetTopnavAPI", {
    auth: "shoolini@999",
  });
  return response.data;
};

export const GetCompaniesAPI = async () => {
  const response = await api.post("/media/GetCompaniesAPI", {
    auth: "shoolini@999",
    id: "all",
  });
  return response.data;
};

export const programApi = async () => {
  try {
    const data = await fetch(
      "https://shooliniuniversity.com/media/HomeprogramAPI",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ auth: "shoolini@999" }),
      }
    );
    const json = await data.json();

    if (json?.success) {
      for (let index = 0; index < json?.success.length; index++) {
        const name = json?.success[index];
        const data = await fetchProgramData(name.link_url);
        if (data?.success?.[0]?.courses) {
          json.success[index].courses = data?.success?.[0]?.courses.slice(0, 3);
        }
      }
    }
    return json?.success;
  } catch (err) {
    console.log(err);
  }
};

export const SearchProgramApi = async () => {
  const reqType = ["undergraduate", "postgraduate", "doctor"];
  const reqPromise = Array(3)
    .fill()
    .map((_, i) => {
      const body = JSON.stringify({
        auth: "shoolini@999",
        [reqType[i]]: i + 1,
      });
      return fetch("https://shooliniuniversity.com/media/programAPI", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
    });

  const [pgdata, gdata, ddata] = await Promise.all(reqPromise);

  const result_pg = await pgdata.json();
  const result_g = await gdata.json();
  const result_d = await ddata.json();

  const result = {
    result_pg: result_pg.success,
    result_g: result_g.success,
    result_d: result_d.success,
  };

  return result;
};

export const testimonialApi = async () => {
  const response = await api.post("/media/GetHprogramAPI", {
    auth: "shoolini@999",
    url: "homepage",
  });
  if (response.data) {
    return response.data.success[0];
  }
  return [];
};

export const GetFaq = async (url) => {
  const res = await fetch(`https://shooliniuniversity.com/media/GetFaqSchema`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      auth: "shoolini@999",
      url: url,
    }),
  });
  const data = await res.json();

  if (data?.success) {
    return data.success;
  }
  return {};
};

export const GetNavigationSchema = async (url) => {
  const res = await fetch(
    `https://shooliniuniversity.com/media/GetNavigationSchemaAPI`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        auth: "shoolini@999",
      }),
    }
  );
  const data = await res.json();
  if (data?.success) {
    return data.success;
  }

  return {};
};

export const GetSiteLinkSchema = async (url) => {
  const res = await fetch(
    `https://shooliniuniversity.com/media/GetSiteLinkSchemaAPI`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        auth: "shoolini@999",
      }),
    }
  );
  const data = await res.json();
  if (data?.success) {
    return data.success;
  }

  return {};
};


