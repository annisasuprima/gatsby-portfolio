import React from 'react';
import socialMedia from "../../../data/socialMedia.json";
import data from "./../../../data/data";
import { FooterStyle, FooterBody, SubRight, CopyRight, MediaLink, FooterSocialMedia } from './style'
import {ContainerLayout, ButtonDefault} from '../../common'

const Footer = () => {
	return (
		<>
			<FooterStyle>
				<ContainerLayout>
					<FooterBody>
						<FooterSocialMedia>
							{socialMedia.map(({ id, name, url,icon }) => (
								
								<li key={id} style={{display:"flex",alignItems:"center", gap:"5px"}}> 
								<img src={icon} style={{width:"20px", height:"20px", objectFit:"cover"}}/>
									<MediaLink className="lined-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`follow us on ${name}`}>
										{name}
									</MediaLink> 
									
								</li>
							))}
						</FooterSocialMedia>
						<div>
							<p className="text-primary quote"> Mari Berkenalan Lebih Dekat </p>
							<ButtonDefault href={`mailto:${data.SiteContact.email}`}> Contact me </ButtonDefault>
						</div>
					</FooterBody>
					{/* <div className="box">
						<SubRight> Good design doesn't date. Bad design does. </SubRight>
						<CopyRight className="text-dark">
							© 
							<span> {new Date().getFullYear()}, Built with {` `} 
								<a href="https://www.gatsbyjs.org">Gatsby</a>{" "}
          		</span> 
							Copyright 2020 by {data.SiteAuthor} </CopyRight>
					</div> */}
				</ContainerLayout>
			</FooterStyle>
		</>
	)
}

export default Footer;
