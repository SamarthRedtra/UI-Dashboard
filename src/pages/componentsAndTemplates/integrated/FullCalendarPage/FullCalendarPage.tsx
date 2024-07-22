import React, { useRef } from 'react';
import useScrollSpy from 'react-use-scrollspy';
import Subheader, {
	SubheaderLeft,
	SubheaderRight,
} from '../../../../components/layouts/Subheader/Subheader';
import Breadcrumb from '../../../../components/layouts/Breadcrumb/Breadcrumb';
import PageWrapper from '../../../../components/layouts/PageWrapper/PageWrapper';
import Doc, { DocContent, DocNav } from '../../../../templates/for-demo/Doc';
import ExampleView from '../../../../templates/for-demo/ExampleView';
import Card, { CardBody } from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Container from '../../../../components/layouts/Container/Container';
import FullCalendarExample1Partial from './_partial/FullCalendarExample1.partial';
import FullCalendarPageExample1MD from './md/FullCalendarPageExample1.md';

const FullCalendarPage = () => {
	const sectionRefs = [
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
		useRef(null),
	];
	const activeSection = useScrollSpy({
		sectionElementRefs: sectionRefs,
		offsetPx: -90,
	});

	return (
		<PageWrapper name='Full Calendar'>
			<Subheader>
				<SubheaderLeft>
					<Breadcrumb
						path='Components & Templates / Integrated'
						currentPage='Full Calendar'
					/>
				</SubheaderLeft>
				<SubheaderRight>
					<Button
						icon='CustomNpm'
						onClick={() => {
							window.open(
								'https://www.npmjs.com/package/@fullcalendar/react',
								'_blank',
							);
						}}>
						FullCalendar React Component
					</Button>
					<Button
						icon='CustomGithub'
						onClick={() => {
							window.open(
								'https://github.com/fullcalendar/fullcalendar-react#readme',
								'_blank',
							);
						}}>
						FullCalendar React Component
					</Button>
				</SubheaderRight>
			</Subheader>
			<Container>
				<Doc>
					<DocContent>
						<div
							id='Examples'
							ref={sectionRefs[0]}
							className='scroll-mt-offset col-span-12'>
							<span className='text-3xl font-semibold'>Examples</span>
						</div>
						<div className='col-span-12'>
							<ExampleView
								title='Example 1'
								mdFile={FullCalendarPageExample1MD as RequestInfo}>
								<Card>
									<CardBody>
										<FullCalendarExample1Partial />
									</CardBody>
								</Card>
							</ExampleView>
						</div>
					</DocContent>
					<DocNav>
						<Button isActive={activeSection === 0} className='!px-0'>
							<a href='#Examples'>Examples</a>
						</Button>
					</DocNav>
				</Doc>
			</Container>
		</PageWrapper>
	);
};

export default FullCalendarPage;
