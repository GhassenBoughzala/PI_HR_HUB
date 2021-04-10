import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../Redux/actions/team/TeamAction";
import AddTeam from "./AddTeam";
import ButterToast, { Cinnamon } from "butter-toast";

const ViewTeam = (props) => {
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    props.fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDelete = (id) => {
      const onSuccess = () => {
        ButterToast.raise({
          content: (
            <Cinnamon.Crisp
              title="Team Deleted Successfully"
              content="Delete Notification"
              scheme={Cinnamon.Crisp.SCHEME_PURPLE}
              //icon={<DeleteSweep />}
            />
          ),
        });
      };
      if (window.confirm("Are you sure to delete this Team ?"))
        props.deleteTeams(id, onSuccess);
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-gray-800">
                    Teams
                  </h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                      Team Name
                    </th>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                      Numbers
                    </th>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                      Description
                    </th>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                    </th>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  {props.TeamsList.map((team, index) => {
                    return (
                      <Fragment key={index}>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                            {team.teamName}{" "}
                          </th>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                            {team.participantNumber}{" "}
                          </th>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                            {team.description}{" "}
                          </th>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                            <button
                              className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setCurrentId(team._id)}
                            >
                              Edit
                            </button>{" "}
                          </th>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                            <button
                              className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => onDelete(team._id)}
                            >
                              Delete
                            </button>{" "}
                          </th>
                        </tr>
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          
        </div>

        <div className="w-full lg:w-4/12 px-4">
          <AddTeam {...{ currentId, setCurrentId }} />
        </div>
      </div>
  
    </>
  );
};

const mapStateToProps = (state) => ({
  TeamsList: state.teamsReducer.list,
});

const mapActionToProps = {
  fetchAll: actions.AllTeams,
  deleteTeams: actions.DeleteTeams,
};

export default connect(mapStateToProps, mapActionToProps)(ViewTeam);