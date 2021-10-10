import React, { useState } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Formik, Form } from 'formik';
import { Input, FormFeedback } from 'reactstrap';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	name: Yup.string().required('Name is required field'),
	email: Yup.string().email('Email format is incorrect!').required('Email is required field'),
	message: Yup.string().required('Message is required field')
});

const GoogleMaps = (props) => {
	const [ showingInfoWindow, setShowingInfoWindow ] = useState(false);
	const [ activeMarker, setActiveMarker ] = useState({});
	const [ selectedPlace, setSelectedPlace ] = useState({});
	const { google } = props;

	const onMarkerClick = (props, marker, e) => {
		setSelectedPlace(props);
		setActiveMarker(marker);
		setShowingInfoWindow(true);
	};

	if (!google) {
		return <div>Loading...</div>;
	}

	return (
		<div className="wow fadeIn">
			<div style={{ width: '100%', height: '80px', backgroundColor: '#161c26' }} />
			<div
				id="map"
				style={{
					position: 'relative',
					height: 'calc(100vh - 50px)'
				}}
			>
				<Map
					google={google}
					zoom={18}
					initialCenter={{
						lat: 21.0318533,
						lng: 105.7832901
					}}
				>
					<Marker onClick={onMarkerClick} name="Toà nhà Kim Ánh - Ngõ 78 Duy Tân - Cầu Giấy - Hà Nội" />

					<InfoWindow marker={activeMarker} visible={showingInfoWindow}>
						<div>
							<h6>{selectedPlace.name}</h6>
						</div>
					</InfoWindow>
				</Map>
				<Formik
					initialValues={{
						name: '',
						email: '',
						subject: '',
						message: ''
					}}
					validationSchema={validationSchema}
					validateOnChange={false}
				>
					{({ handleChange, handleBlur, values, errors, touched }) => (
						<Form className="send-message wow zoomIn" data-wow-delay="0.5s" name="contact" id="contact">
							<h4 className="send-message__title">Contact Us</h4>
							<Input
								type="text"
								name="name"
								placeholder="Name *"
								onChange={handleChange}
								value={values.name}
								invalid={!!errors.name}
							/>
							<FormFeedback>{errors.name}</FormFeedback>
							<Input
								type="text"
								name="email"
								placeholder="Email *"
								onChange={handleChange}
								value={values.email}
								invalid={!!errors.email}
							/>
							<FormFeedback>{errors.email}</FormFeedback>
							<Input
								type="text"
								name="subject"
								placeholder="Subject"
								onChange={handleChange}
								value={values.subject}
								invalid={!!errors.subject}
							/>
							<FormFeedback>{errors.subject}</FormFeedback>
							<Input
								type="textarea"
								name="message"
								placeholder="Message *"
								onChange={handleChange}
								value={values.message}
								invalid={!!errors.message}
							/>
							<FormFeedback>{errors.message}</FormFeedback>
							<button type="submit" className="send-message__button">
								Send
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};
export default GoogleApiWrapper({ apiKey: 'AIzaSyBjJ4_3mM4cyPsOaUzrNXXaQPgier1I7_4', v: '3.30' })(GoogleMaps);
