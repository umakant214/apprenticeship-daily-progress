import { useState } from "react";

const Task5 = () => {
  // website
  const [website, setWebsite] = useState("");
  const [websiteErr, setWebsiteErr] = useState(false);
  const [websiteErrMsg, setWebsiteErrMsg] = useState("");

  // github
  const [github, setGithub] = useState("");
  const [githubErr, setGithubErr] = useState(false);
  const [githubErrMsg, setGithubErrMsg] = useState("");

  // linkedin
  const [linkedin, setLinkedin] = useState("");
  const [linkedinErr, setLinkedinErr] = useState(false);
  const [linkedinErrMsg, setLinkedinErrMsg] = useState("");

  // portfolio slug
  const [slug, setSlug] = useState("");
  const [slugErr, setSlugErr] = useState(false);
  const [slugErrMsg, setSlugErrMsg] = useState("");

  // bio
  const [bio, setBio] = useState("");
  const [bioErr, setBioErr] = useState(false);
  const [bioErrMsg, setBioErrMsg] = useState("");

  const validate = () => {
    let isValid = true;

    // reset errors
    setWebsiteErr(false);
    setGithubErr(false);
    setLinkedinErr(false);
    setSlugErr(false);
    setBioErr(false);

    // regex
    const websiteRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}$/;
    const githubRegex = /^https?:\/\/(www\.)?github\.com\/[A-Za-z0-9_-]+$/;
    const linkedinRegex =
      /^https?:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]+$/;
    const slugRegex = /^[a-z0-9-]+$/;

    // Website
    if (website.trim() === "") {
      isValid = false;
      setWebsiteErr(true);
      setWebsiteErrMsg("Website URL is required");
    } else if (!websiteRegex.test(website)) {
      isValid = false;
      setWebsiteErr(true);
      setWebsiteErrMsg("Invalid website URL");
    }

    // GitHub
    if (github.trim() === "") {
      isValid = false;
      setGithubErr(true);
      setGithubErrMsg("GitHub URL is required");
    } else if (!githubRegex.test(github)) {
      isValid = false;
      setGithubErr(true);
      setGithubErrMsg("Invalid GitHub profile URL");
    }

    // LinkedIn
    if (linkedin.trim() === "") {
      isValid = false;
      setLinkedinErr(true);
      setLinkedinErrMsg("LinkedIn URL is required");
    } else if (!linkedinRegex.test(linkedin)) {
      isValid = false;
      setLinkedinErr(true);
      setLinkedinErrMsg("Invalid LinkedIn profile URL");
    }

    // Portfolio Slug
    if (slug.trim() === "") {
      isValid = false;
      setSlugErr(true);
      setSlugErrMsg("Portfolio slug is required");
    } else if (!slugRegex.test(slug)) {
      isValid = false;
      setSlugErr(true);
      setSlugErrMsg("Only lowercase letters, numbers & hyphen allowed");
    }

    // Bio
    if (bio.trim() === "") {
      isValid = false;
      setBioErr(true);
      setBioErrMsg("Bio is required");
    } else if (bio.length < 30) {
      isValid = false;
      setBioErr(true);
      setBioErrMsg("Bio must be at least 30 characters");
    }

    return isValid;
  };

  const submit = () => {
    if (validate()) {
      console.log({ website, github, linkedin, slug, bio });
    }
  };

  return (
    <div className="col-sm-5 mx-auto mt-5 p-4 bg-light rounded-4 shadow-sm">
      <h3 className="text-center mb-4">
        Web Profile <span className="text-warning">Form</span>
      </h3>

      <input
        type="text"
        placeholder="Website URL"
        className="form-control mb-2"
        onChange={(e) => setWebsite(e.target.value)}
      />
      {websiteErr && <p className="text-danger">{websiteErrMsg}</p>}

      <input
        type="text"
        placeholder="GitHub Profile URL"
        className="form-control mb-2"
        onChange={(e) => setGithub(e.target.value)}
      />
      {githubErr && <p className="text-danger">{githubErrMsg}</p>}

      <input
        type="text"
        placeholder="LinkedIn Profile URL"
        className="form-control mb-2"
        onChange={(e) => setLinkedin(e.target.value)}
      />
      {linkedinErr && <p className="text-danger">{linkedinErrMsg}</p>}

      <input
        type="text"
        placeholder="Portfolio Slug (e.g. umakant-yadav)"
        className="form-control mb-2"
        onChange={(e) => setSlug(e.target.value)}
      />
      {slugErr && <p className="text-danger">{slugErrMsg}</p>}

      <textarea
        rows="4"
        placeholder="Bio (minimum 30 characters)"
        className="form-control mb-2"
        onChange={(e) => setBio(e.target.value)}
      ></textarea>
      {bioErr && <p className="text-danger">{bioErrMsg}</p>}

      <button onClick={submit} className="btn btn-warning w-100">
        Submit
      </button>
    </div>
  );
};

export default Task5;
