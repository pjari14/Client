import React from "react";

import image from "../Assets/images/cyber-attack-2.jpg";
import virus from "../Assets/images/virus.jpg";
import hack from "../Assets/images/hack.png";
import malcode from "../Assets/images/malcode.jpg";
import trojan from "../Assets/images/trojan.jpg";
import theft from "../Assets/images/Identity-Theft.jpg";
import phishing from "../Assets/images/Phishing.jpg";
import espionage from "../Assets/images/espionage.jpg";
import warfare from "../Assets/images/warfare.jpg";
const Cybercrime = () => {
  return (
    <>
      <section class="cybercrimes">
        <div style={{ textAlign: "center" }}>
          <img class="" alt="" src={image} style={{ width: "100%" }}></img>
        </div>
        <div class="container">
          <div class="post" style={{ textalign: "justify" }}>
            <div class="header">
              <h1 class="py-4" style={{ fontWeight: 500, color: "#A4303F" }}>
                Cyber Crime
              </h1>
            </div>
            <p
              style={{
                fontsize: "20px",
                textalign: "justify",
                padding: "10px",
              }}
            >
              Cybercrime, especially involving the Internet, represents an
              extension of existing criminal behaviour alongside some novel
              illegal activities. The connection between internet ecosystems
              forms cyberspace. The threat to cyberspace leads to an issue and
              gives rise to the need for cybersecurity.
            </p>
            <p
              style={{
                fontsize: "20px",
                textalign: "justify",
                padding: "10px",
              }}
            >
              Most cybercrime is an attack on information about individuals,
              corporations, or governments. Although the attacks do not take
              place on a physical body, they do take place on the personal or
              corporate virtual body, which is the set of informational
              attributes that define people and institutions on the Internet.
            </p>
            <hr></hr>
            <h2 class="title">
              <span style={{ color: "#A4303F" }}>
                The need of cyber security{" "}
              </span>
            </h2>{" "}
            <hr />
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "5px",
                fontWeight: "bold",
              }}
            >
              {" "}
              ⇒ Cyber Security protects the cyberspace from the following :
            </p>
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              {" "}
              <b>1) Cyber Attacks : </b> A cyber attack is a set of actions
              performed by threat actors, who try to gain unauthorized access,
              steal data or cause damage to computers, computer networks, or
              other computing systems.The individuals who launch cyber attacks
              are usually referred to as cybercriminals, threat actors, bad
              actors, or hackers.
            </p>
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              {" "}
              <b>2)Damage to Cyberspace : </b> Damage to cyberspace can
              encompass a range of issues, including cyber threats, attacks, and
              vulnerabilities.Addressing damage to cyberspace requires a
              multifaceted approach involving cybersecurity measures,
              international cooperation, legislative frameworks.
            </p>
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              {" "}
              <b>3) Misuse of Cyberspace : </b> The misuse of cyberspace refers
              to various activities that exploit digital platforms and networks
              for malicious or harmful purposes. As technology advances, so do
              the methods employed by individuals or groups engaging in cyber
              misconduct.
            </p>
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              <b>4) Economic Espionage : </b> Economic espionage refers to the
              act of stealing trade secrets, proprietary information,
              intellectual property (IP), or confidential business strategies
              from companies, governments, or institutions to use it to gain a
              competitive advantage, often for the benefit of another company or
              country.
            </p>
            <hr></hr>
            <h2 class="title">
              <span style={{ color: "#A4303F" }}>
                Cyber Security - Evolution{" "}
              </span>
            </h2>{" "}
            <hr />
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              <b>
                With the introduction of cyberattacks, cybersecurity initiatives
                have evolved. They are mentioned in the table below:
              </b>
            </p>
            <table
              class="table table-bordered"
              style={{ border: "1px solid black" }}
            >
              <tbody>
                <tr>
                  <th
                    colspan="2"
                    style={{
                      textAlign: "center",
                      backgroundColor: "#407cc0",
                      color: "white",
                    }}
                  >
                    Evolution of Cyber Security
                  </th>
                </tr>

                <tr>
                  <td style={{ textAlign: "center" }}>
                    <strong>Issues</strong>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <strong>Cyber Security Initiatives</strong>
                  </td>
                </tr>

                <tr>
                  <td>Virus (1990s)</td>
                  <td>
                    <ul>
                      <li>Anti-Virus</li>
                      <li>Firewalls</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>Worms (2000s)</td>
                  <td>
                    <ul>
                      <li>Intrusion Detection and Prevention</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>Botnets (2000s – Present)</td>
                  <td>
                    <ul>
                      <li>DLP, Application-aware Firewalls, SIM</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>APT Insiders (Present)</td>
                  <td>
                    <ul>
                      <li> Network Flow Analysis</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr></hr>
            <h2 class="title">
              <span style={{ color: "#A4303F" }}>Cyber Threats </span>
            </h2>{" "}
            <hr />
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              {" "}
              <b>
                There are types of cyber attacks that have evolved over a period
                of time:
              </b>
            </p>
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              {" "}
              <b style={{ color: "red" }}>
                <strong> ➱ Virus : </strong>
              </b>
              It is a malware that self-replicates and spreads by inserting
              copies of itself into other executable code or documents.When the
              replication process is complete, this code infects the other files
              and programs on your system. When a computer changes the way in
              which it should work normally, it is said to be infected by a
              virus. This virus may spread from one computer to another.
            </p>
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              <b>
                For example, you may receive an email with a harmful attachment,
                inadvertently open the file, and the computer virus then infects
                your machine.{" "}
              </b>
            </p>
            <img
              alt=""
              src={virus}
              style={{ width: "100%", height: "450px" }}
              class="py-3"
            ></img>{" "}
            <hr></hr>
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              {" "}
              <b style={{ color: "red" }}>
                <strong> ➱ Hacking Websites : </strong>
              </b>{" "}
              Hacking in cyber security refers to the misuse of devices like
              computers, smartphones, tablets, and networks to cause damage to
              or corrupt systems, gather information on users, steal data and
              documents, or disrupt data-related activity. An unauthorized
              access to any website belonging in a personal or professional
              space.
            </p>
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              <b>
                For example, Morris Worm (1988), Yahoo Data Breach (2013-2014),
                Target Stores Data Breach (2013). SQL Injection attack is the
                most common website hacking technique.{" "}
              </b>
            </p>
            <img
              alt=""
              src={hack}
              style={{ width: "100%", height: "450px" }}
              class="py-3"
            ></img>{" "}
            <hr></hr>
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              {" "}
              <b style={{ color: "red" }}>
                <strong> ➱ Malicious Codes : </strong>
              </b>{" "}
              Malicious code is a kind of security threat where any code present
              in software tends to bring harmful effects, breach the security of
              the system, or bring damage to the system. It refers to any code
              intended to cause undesired effects within a system. It is a type
              of code intentionally developed to harm or exploit a computing
              system.{" "}
            </p>
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              <b>
                Malicious code examples include backdoor attacks, scripting
                attacks, worms, trojan horse and spyware.
              </b>
            </p>
            <img
              alt=""
              src={malcode}
              style={{ width: "100%", height: "450px" }}
              class="py-3"
            ></img>
            <hr></hr>
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              {" "}
              <b style={{ color: "red" }}>
                <strong> ➱ Trojans : </strong>
              </b>{" "}
              Trojans are deceptive programs that appear to perform one
              function, but in fact perform another, malicious function. They
              might be disguised as free software, videos or music, or seemingly
              legitimate advertisements. Trojans can act as standalone tools for
              attackers, or can be a platform for other malicious activity.{" "}
            </p>
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              <b>
                For example, trojan downloaders are used by attackers to deliver
                future payloads to a victim’s device.{" "}
              </b>
            </p>
            <img
              alt=""
              src={trojan}
              style={{ width: "100%", height: "400px" }}
              class="py-3"
            ></img>
            <hr></hr>
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              {" "}
              <b style={{ color: "red" }}>
                <strong> ➱ Identity Theft : </strong>
              </b>
              Identity theft is the crime of using the personal or financial
              information of another person to commit fraud, such as making
              unauthorized transactions or purchases. Identity theft is
              committed in many different ways and its victims are typically
              left with damage to their credit, finances, and reputation.
            </p>
            <p
              style={{
                fontsize: "30px",
                textAlign: "justify",
                padding: "10px",
              }}
            >
              <b>
                For example , The ChoicePoint Incident, Financial identity theft
                and fraud, Government documents or benefits fraud.
              </b>
            </p>
            <hr></hr>
            <img
              alt=""
              src={theft}
              style={{ width: "100%", height: "400px" }}
              class="py-3"
            ></img>
          </div>
          <hr></hr>
          <p
            style={{
              fontsize: "30px",
              textAlign: "justify",
              padding: "10px",
            }}
          >
            {" "}
            <b style={{ color: "red" }}>
              <strong> ➱ Phishing : </strong>
            </b>{" "}
            Phishing is a type of social engineering and cybersecurity attack
            where the attacker impersonates someone else via email or other
            electronic communication methods, including social networks and
            Short Message Service ( SMS) text messages, to reveal sensitive
            information. Phishing attacks are the practice of sending fraudulent
            communications that appear to come from a reputable source.{" "}
          </p>
          <p
            style={{
              fontsize: "30px",
              textAlign: "justify",
              padding: "10px",
            }}
          >
            <b>
              For example , Estonian Cyber War, Google and Facebook Phishing
              Attack, Sony Pictures Hack.
            </b>
          </p>
          <img
            alt=""
            src={phishing}
            style={{ width: "100%", height: "450px" }}
            class="py-3"
          ></img>
          <hr></hr>
          <p
            style={{
              fontsize: "30px",
              textAlign: "justify",
              padding: "10px",
            }}
          >
            {" "}
            <b style={{ color: "red" }}>
              <strong> ➱ Cyber Espionage : </strong>
            </b>{" "}
            Cyber espionage, or cyber spying, is a type of cyberattack in which
            an unauthorized user attempts to access sensitive or classified data
            or intellectual property (IP) for economic gain, competitive
            advantage or political reasons. Usually when a government’s or
            important organization’s privacy is posed at risk due to illegal use
            of computer networks to seek confidential information.
          </p>
          <p
            style={{
              fontsize: "30px",
              textAlign: "justify",
              padding: "10px",
            }}
          >
            <b>
              For example, Social engineering, Supply Chain Attacks, Fake or
              Trojan Attackes.
            </b>
          </p>
          <img
            alt=""
            src={espionage}
            style={{ width: "100%", height: "400px" }}
            class="py-3"
          ></img>
          <hr></hr>
          <p
            style={{
              fontsize: "30px",
              textAlign: "justify",
              padding: "10px",
            }}
          >
            {" "}
            <b style={{ color: "red" }}>
              <strong> ➱ Cyber Warfare : </strong>
            </b>{" "}
            Cyberwarfare is typically defined as a set of actions by a nation or
            organization to attack countries or institutions' computer network
            systems with the intention of disrupting, damaging, or destroying
            infrastructure by computer viruses or denial-of-service attacks. It
            is a series of strategic cyber attacks against a nation-state,
            causing it significant harm.
          </p>
          <p
            style={{
              fontsize: "30px",
              textAlign: "justify",
              padding: "10px",
            }}
          >
            <b>
              For example, be the use of a virus or distributed
              denial-of-service ( DDoS) attack to damage or infiltrate another
              nation's information network.{" "}
            </b>
          </p>
          <img
            alt=""
            src={warfare}
            style={{ width: "100%", height: "370px" }}
            class="py-3"
          ></img>
          <hr></hr>
          <p>
            <b>
              To conclude, I hope that with the combined efforts of companies,
              banks and the authorities, we can see a drop in cyber-crime rates
              in 2024!
            </b>
          </p>
        </div>
      </section>
    </>
  );
};
export default Cybercrime;
