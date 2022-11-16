import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cripackImg from '../public/assets/projects/cripack.png';
import mutualserImg from "../public/assets/projects/mutualser.png"
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>Lo que he construido</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Cripack ERP'
            backgroundImg={cripackImg}
            projectUrl='/cripack'
            tech='Vuejs'
          />
          <ProjectItem
            title='Mutualser EPS'
            backgroundImg={mutualserImg}
            projectUrl='/mutualser'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
