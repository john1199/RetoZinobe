import axios from "axios";
const initialState = {
  users: {},
  teams: [
    {
      id: 1,
      name: "Diseño",
    },
    {
      id: 2,
      name: "Tech Términus",
    },
    {
      id: 3,
      name: "Tech Big Data",
    },
    {
      id: 4,
      name: "Tech Front´s",
    },
    {
      id: 5,
      name: "Data",
    },
    {
      id: 6,
      name: "QA´s",
    },
    {
      id: 7,
      name: "OPS PM´s",
    },
  ],
  seniorities: [
    {
      id: 1,
      name: "Junior",
    },
    {
      id: 2,
      name: "Junior Advance",
    },
    {
      id: 3,
      name: "SemiSenior",
    },
    {
      id: 4,
      name: "Senior",
    },
    {
      id: 5,
      name: "Senior Advance",
    },
    {
      id: 6,
      name: "Technical Lead",
    },
  ],
  learnPoints: [
    {
      id: 1,
      name: "Aprender",
      description: "Autodesarrollo: Mooc´s, certificados, postgrados.",
      points: 50,
    },
    {
      id: 2,
      name: "Aprender",
      description:
        "Certificaciones cursos técnicos que contribuyan en el desarrollo de proyectos",
      points: 50,
    },
  ],
  contributePoints: [
    {
      id: 1,
      name: "Contribuir",
      description: "Dirigir charlas, Talleres, u otras act. Formativas",
      points: 100,
    },
    {
      id: 2,
      name: "Contribuir",
      description:
        "Dirigir charlas, Talleres, u otras act. Formativas para Zinobe",
      points: 120,
    },
    {
      id: 3,
      name: "Contribuir",
      description: "Realizar herramientas que optimicen el trabajo del equipo.",
      points: 120,
    },
  ],
  teamworkPoints: [
    {
      id: 1,
      name: "Trabajo en equipo",
      description: "1er puesto en challenges",
      points: 400,
    },
    {
      id: 2,
      name: "Trabajo en equipo",
      description: "2do puesto en challenges",
      points: 300,
    },
    {
      id: 3,
      name: "Trabajo en equipo",
      description: "Cumplimiento de objetivos mensuales por equipo.",
      points: 150,
    },
  ],
};
export default initialState;
/*

async function getTeams() {
  try {
    const res = await axios.get("http://localhost:4000/api/admin/teams", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    this.setState({
      teams: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
}
async function getUsers() {
  try {
    const res = await axios.get("http://localhost:4000/api/admin/users", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    //console.log(res.data.data[0]);
    this.setState({
      users: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
}

async function getSeniorities() {
  try {
    const res = await axios.get("http://localhost:4000/api/admin/seniorities", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    //console.log(res.data.data[0]);
    this.setState({
      seniorities: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
} /*
getUsers();
getTeams();
getSeniorities();/*/
