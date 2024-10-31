import React, { useState } from "react";
import { acts } from "../lib/acts";

const ActsTable = () => {
  const [view, setView] = useState("day");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const toggleView = () => setView(view === "day" ? "week" : "day");

  const getEventsForDate = (date) => {
    if (view === "day") {
      return acts.filter((event) => event.date === date);
    } else {
      const weekStart = new Date(date);
      const weekEnd = new Date(date);
      weekEnd.setDate(weekEnd.getDate() + 6);

      return acts.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate >= weekStart && eventDate <= weekEnd;
      });
    }
  };

  const getWeekRange = (date) => {
    const current = new Date(date);
    const weekStart = new Date(current);
    weekStart.setDate(current.getDate() - current.getDay());
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    return {
      start: weekStart.toLocaleDateString(),
      end: weekEnd.toLocaleDateString(),
    };
  };

  const hours = [
    "12:00",
    "13:00",
    "14:00",
    "1500",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  const stages = [
    "Stage 1",
    "Stage 2",
    "Stage 3",
    "Stage 4",
    "Stage 5",
    "Stage 6"
  ];

  return (
    <div className="py-8 px-4 rounded-xl widget w-full  ">
      <div className="relative h-[calc(100dvh-181px)] overflow-y-auto ">
        <div className="mx-auto flex flex-col gap-4 md:flex-row justify-between mb-8 items-center">
          <button
            className="border border-white px-4 py-2 rounded-full"
            onClick={toggleView}
          >
            SonicVibes Festival 2024
          </button>
          <h2> Day: {new Date(selectedDate).toLocaleDateString()}</h2>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="text-black px-4 rounded-full py-2"
          />
        </div>
        <table className="md:table-fixed min-w-full ">
          <thead className="border-b border-black ">
            <tr className="border-b border-gray-900">
              <th className="pb-4 border-r border-gray-900 w-16 text-start">
                Time
              </th>
              {stages.map((stage) => (
                <th
                  key={stage}
                  className="pb-4 border-r border-gray-900 last:border-r-0 min-w-32"
                >
                  {stage}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hours.map((hour, index) => (
              <tr key={index} className="border-b border-gray-900">
                <td className="border-r border-gray-900 last:border-r-0 h-16">
                  {hour}
                </td>
                {stages.map((stage) => {
                  const event = getEventsForDate(selectedDate).find(
                    (e) => e.start === hour && e.stage === stage
                  );
                  return (
                    <td
                      key={stage}
                      className="py-4 border-b border-gray-900 border-r last:border-r-0 px-2 w-56"
                    >
                      {event ? (
                        <span className="block bg-white text-gray-900 rounded-md p-2 text-sm">
                          {event.band}{" "}
                          <p className="text-xs text-gray-500 line-clamp-2">
                            {event.description}
                          </p>
                        </span>
                      ) : (
                        ""
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActsTable;
