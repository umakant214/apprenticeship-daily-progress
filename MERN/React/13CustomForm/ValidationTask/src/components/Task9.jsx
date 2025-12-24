import { useState } from "react";

const Task9 = () => {
  // IP Address
  const [ip, setIp] = useState("");
  const [ipErr, setIpErr] = useState(false);
  const [ipErrMsg, setIpErrMsg] = useState("");

  // MAC Address
  const [mac, setMac] = useState("");
  const [macErr, setMacErr] = useState(false);
  const [macErrMsg, setMacErrMsg] = useState("");

  // Hex Color Code
  const [color, setColor] = useState("");
  const [colorErr, setColorErr] = useState(false);
  const [colorErrMsg, setColorErrMsg] = useState("");

  // Version Number
  const [version, setVersion] = useState("");
  const [versionErr, setVersionErr] = useState(false);
  const [versionErrMsg, setVersionErrMsg] = useState("");

  // License Key
  const [license, setLicense] = useState("");
  const [licenseErr, setLicenseErr] = useState(false);
  const [licenseErrMsg, setLicenseErrMsg] = useState("");

  const validate = () => {
    let isValid = true;

    // Reset errors
    setIpErr(false);
    setMacErr(false);
    setColorErr(false);
    setVersionErr(false);
    setLicenseErr(false);

    // Regex Patterns
    const ipRegex =
      /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;

    const macRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;

    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

    const versionRegex = /^\d+\.\d+\.\d+$/; // e.g. 1.0.2

    const licenseRegex = /^[A-Z0-9]{4}(-[A-Z0-9]{4}){3}$/; // XXXX-XXXX-XXXX-XXXX

    // IP Address
    if (ip.trim() === "") {
      isValid = false;
      setIpErr(true);
      setIpErrMsg("IP address is required");
    } else if (!ipRegex.test(ip)) {
      isValid = false;
      setIpErr(true);
      setIpErrMsg("Invalid IP address format");
    }

    // MAC Address
    if (mac.trim() === "") {
      isValid = false;
      setMacErr(true);
      setMacErrMsg("MAC address is required");
    } else if (!macRegex.test(mac)) {
      isValid = false;
      setMacErr(true);
      setMacErrMsg("Invalid MAC address format");
    }

    // Hex Color Code
    if (color.trim() === "") {
      isValid = false;
      setColorErr(true);
      setColorErrMsg("Color code is required");
    } else if (!hexColorRegex.test(color)) {
      isValid = false;
      setColorErr(true);
      setColorErrMsg("Invalid hex color code");
    }

    // Version Number
    if (version.trim() === "") {
      isValid = false;
      setVersionErr(true);
      setVersionErrMsg("Version number is required");
    } else if (!versionRegex.test(version)) {
      isValid = false;
      setVersionErr(true);
      setVersionErrMsg("Format should be X.Y.Z");
    }

    // License Key
    if (license.trim() === "") {
      isValid = false;
      setLicenseErr(true);
      setLicenseErrMsg("License key is required");
    } else if (!licenseRegex.test(license)) {
      isValid = false;
      setLicenseErr(true);
      setLicenseErrMsg("Format: XXXX-XXXX-XXXX-XXXX");
    }

    return isValid;
  };

  const submit = () => {
    if (validate()) {
      console.log({ ip, mac, color, version, license });
    }
  };

  return (
    <div className="col-sm-6 mx-auto mt-5 p-4 bg-light rounded-4 shadow">
      <h4 className="text-center mb-4">Pattern Validation Form</h4>

      <input
        className="form-control mb-2"
        placeholder="IP Address (192.168.1.1)"
        onChange={(e) => setIp(e.target.value)}
      />
      {ipErr && <p className="text-danger">{ipErrMsg}</p>}

      <input
        className="form-control mb-2"
        placeholder="MAC Address (AA:BB:CC:DD:EE:FF)"
        onChange={(e) => setMac(e.target.value)}
      />
      {macErr && <p className="text-danger">{macErrMsg}</p>}

      <input
        className="form-control mb-2"
        placeholder="Hex Color Code (#FF5733)"
        onChange={(e) => setColor(e.target.value)}
      />
      {colorErr && <p className="text-danger">{colorErrMsg}</p>}

      <input
        className="form-control mb-2"
        placeholder="Version (1.0.0)"
        onChange={(e) => setVersion(e.target.value)}
      />
      {versionErr && <p className="text-danger">{versionErrMsg}</p>}

      <input
        className="form-control mb-3"
        placeholder="License Key (ABCD-1234-EFGH-5678)"
        onChange={(e) => setLicense(e.target.value)}
      />
      {licenseErr && <p className="text-danger">{licenseErrMsg}</p>}

      <button className="btn btn-success w-100" onClick={submit}>
        Submit
      </button>
    </div>
  );
};

export default Task9;
