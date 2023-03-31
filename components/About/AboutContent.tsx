import React, { FC } from "react";

interface TimeSeriesContents {
  startYear: number;
  startMonth: number;
  endYear?: number;
  endMonth?: number;
  main: string;
}

type Props = {
  title: string;
  contents?: string[];
  timeSeriesContents?: TimeSeriesContents[];
};

const AboutContent: FC<Props> = (props) => {
  const { title, contents, timeSeriesContents } = props;
  return (
    <div className="ml-24 my-10">
      <div className="text-2xl mb-1">{title}</div>
      <div>
        {/* nomal contents */}
        {contents &&
          contents.map((content: string, index: number) => (
            <div key={index} className="text-lg my-3">
              {content}
            </div>
          ))}
        {/* time series contents */}
        {timeSeriesContents &&
          timeSeriesContents.map(
            (content: TimeSeriesContents, index: number) => (
              <div
                key={index}
                className="text-lg flex justify-start items-center"
              >
                <div>
                  <div className="bg-gray-300 rounded-full w-2 h-2 mx-auto my-4">
                    <br />
                  </div>
                  <div className="bg-gray-300 rounded-full w-8 h-8">
                    <br />
                  </div>
                  <div className="bg-gray-300 rounded-full w-2 h-2 mx-auto mt-4 mb-2">
                    <br />
                  </div>
                </div>

                <div className="ml-5">
                  {/* contentが終わっていたら */}
                  {content.endYear ? (
                    // contentのstartとendが一致していたらstartだけを表示
                    content.startYear === content.endYear &&
                    content.startMonth === content.endMonth ? (
                      <div>
                        {content.startYear}/{content.startMonth}
                      </div>
                    ) : (
                      // 一致していない場合
                      <div>
                        {content.startYear}/{content.startMonth} -{" "}
                        {content.endYear}/{content.endMonth}
                      </div>
                    )
                  ) : (
                    // contentが終わっていなかったら開始時期-Nowを表示
                    <div>
                      {content.startYear}/{content.startMonth} - Now
                    </div>
                  )}

                  <div className="text-xl">{content.main}</div>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default AboutContent;
