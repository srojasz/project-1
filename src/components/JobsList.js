import React from 'react';
import dataExperience from "../data/dataExperience.json";
import JobDetail from "./JobDetail";

function JobsList(props) {
  return (
    <div>
      {dataExperience.map((job, key) => {
        return (
          <JobDetail
            key={key}
            date={job.date}
            location={job.location}
            role={job.role}
            company={job.company}
          />

        )
      })

      }
    </div>
  )
}

export default JobsList;