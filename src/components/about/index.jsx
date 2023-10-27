import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AboutSection, Title, Text, SubTitle } from "./style"
import { SectionIntro, ContainerLayout, ResumeButton } from "../common"
import ParticleImage, { Vector, forces } from "react-particle-image"

// Round number up to nearest step for better canvas performance
const round = (n, step = 20) => Math.ceil(n / step) * step

// Try making me lower to see how performance degrades
const STEP = 30

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y)
    // Make a particle for this pixel if magnitude < 200 (range 0-255)
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3
    return magnitude < 200
  },
  color: ({ x, y, image }) => {
    const pixel = image.get(x, y)
    // Canvases are much more performant when painting as few colors as possible.
    // Use color of pixel as color for particle however round to nearest 30
    // to decrease the number of unique colors painted on the canvas.
    // You'll notice if we remove this rounding, the framerate will slow down a lot.
    return `rgba(
      ${round(pixel.r, STEP)}, 
      ${round(pixel.g, STEP)}, 
      ${round(pixel.b, STEP)}, 
      ${round(pixel.a, STEP) / 255}
    )`
  },
  radius: ({ x, y, image }) => {
    const pixel = image.get(x, y)
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3
    // Lighter colors will have smaller radius
    return 3 - (magnitude / 255) * 1.5
  },
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2)
  },
}

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 7)
}

const src = "about.jpg"

const About = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     placeholderImage: file(relativePath: { eq: "54db13f1deef6bf15ce17127aa98eb33.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 550) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="about.jpg"
                style={{ width: "350px", height: "400px", objectFit: "cover" }}
              />
              {/* <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" /> */}
              {/* <ParticleImage

                src={src}
                width="400"
                height="400"
                scale={1}
                entropy={5}
                maxParticles={5000}
                particleOptions={particleOptions}
                mouseMoveForce={motionForce}
                touchMoveForce={motionForce}
                backgroundColor={STEP}
              /> */}
              <SubTitle> Web Developer. </SubTitle>
            </div>
            <div>
              <Title> Hello, Saya Annisa Suprima </Title>
              <Text>
                {" "}
                Fresh Graduate{" "}
                <b className="text-primary lined-link">Sarjana Komputer</b>{" "}
              </Text>
              <Text>
                Lulusan S1 Sistem Informasi Universitas Andalas. Terbiasa
                menggunakan paradigma OOP, memiliki pengalaman dalam pembuatan
                website menggunakan laravel dan mobile development menggunakan
                android studio, selain itu saya memiliki kemauan yang kuat untuk
                terus belajar, serta bertanggung jawab atas apa yang dikerjakan
                dan mampu bekerja dalam individu maupun kelompok
              </Text>
              <hr></hr>
              <Text>
                <b className="text-primary lined-link">Riwayat Pendidikan</b>{" "}
              </Text>

              <div
                style={{
                  display: "flex",
                  flexWarp: "warp",
                  gap: "50px",
                  margin: "0 auto",
                }}
              >
                <div style={{ flex: "1" }}>
                  <Text style={{ textAlign: "justify" }}>
                    Universitas Andalas<br></br>
                    Jurusan Sistem Informasi
                  </Text>
                  <Text style={{ textAlign: "justify" }}></Text>
                </div>
                <div style={{ flex: "1" }}>
                  <Text style={{ textAlign: "justify" }}>
                    Agustus 2018 - Maret 2023 <br></br>
                    IPK : 3.76
                  </Text>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWarp: "warp",
                  gap: "50px",
                  margin: "0 auto",
                }}
              >
                <div style={{ flex: "1" }}>
                  <Text style={{ textAlign: "justify" }}>
                    SMA Negeri 1 Gunung Talang<br></br>
                    IPA
                  </Text>
                  <Text style={{ textAlign: "justify" }}></Text>
                </div>
                <div style={{ flex: "1" }}>
                  <Text style={{ textAlign: "justify" }}>
                    Juli 2015 - Mei 2018 <br></br>
                    
                  </Text>
                </div>
              </div>

              <ResumeButton href="resume.pdf" target="_blank">
                {" "}
                Download CV{" "}
              </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About
