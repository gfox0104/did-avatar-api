const axios = require("axios");

const getPresenters = async (req, res, next) => {
  axios
    .get(`${process.env.DID_URL}/clips/presenters?limit=100`, {
      headers: {
        accept: "application/json",
        authorization: process.env.DID_Token,
      },
    })
    .then((obj) => {
      return res.json(obj.data);
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const createClip = async (req, res, next) => {
  const type = "text";
  const subtitles = "false";
  const provider = { type: "microsoft", voice_id: "en-US-JennyNeural" };
  const ssml = "false";
  const input = req.body.input;
  const config = { result_format: "mp4" };
  const presenter_id = req.body.presenter_id;

  const data = {
    script: {
      type: type,
      subtitles: subtitles,
      provider: provider,
      ssml: ssml,
      input: input,
    },
    config: config,
    presenter_config: {
      crop: {
        type: "wide",
      },
    },
    presenter_id: presenter_id,
  };

  axios
    .post(`${process.env.DID_URL}/clips`, data, {
      headers: {
        accept: "application/json",
        authorization: process.env.DID_Token,
        "content-type": "application/json",
      },
    })
    // Show response data
    .then((obj) => {
      return res.json(obj.data);
    })
    .catch((err) => {
      console.log(err);
      return res.json(err);
    });
};

const getClips = async (req, res, next) => {
  axios
    .get(`${process.env.DID_URL}/clips`, {
      headers: {
        accept: "application/json",
        authorization: process.env.DID_Token,
      },
    })
    // Show response data
    .then((obj) => {
      return res.json(obj.data);
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const getClip = async (req, res, next) => {
  const id = req.params.id;

  axios
    .get(`${process.env.DID_URL}/clips/${id}`, {
      headers: {
        accept: "application/json",
        authorization: process.env.DID_Token,
      },
    })
    // Show response data
    .then((obj) => {
      return res.json(obj.data);
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const deleteClip = async (req, res, next) => {
  const id = req.params.id;

  axios
    .delete(`${process.env.DID_URL}/clips/${id}`, {
      headers: {
        accept: "application/json",
        authorization: process.env.DID_Token,
      },
    })
    // Show response data
    .then((obj) => {
      return res.json(obj.data);
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const clipController = {
  createClip,
  getClips,
  getClip,
  deleteClip,
  getPresenters,
};

module.exports = clipController;
