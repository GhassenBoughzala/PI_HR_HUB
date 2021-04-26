import React from "react";

const CandidateProfile = ({ candidate }) => {
  return (
    <>
      <div class=" relative xl:w-4/12    px-6 m-8 rounded overflow-hidden shadow-lg">
        <img
          class="w-full"
          src={candidate.profilePhoto}
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{candidate.fullName}</div>
          <p class="text-grey-darker text-base">{candidate.title}</p>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
            {candidate.education}
          </span>
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
            {candidate.location}
          </span>
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
            {candidate.background}{" "}
          </span>
        </div>
        <button
          className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Edit
        </button>

        <button
          className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default CandidateProfile;
