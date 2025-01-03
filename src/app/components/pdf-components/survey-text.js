'use client';

export default function SurveyText() {
    return (
        <div className="px-12">
            <div>
                <h3 className="text-3xl font-bold flex items-center">
                    How to use these scores?
                </h3>
                <p className="mt-3 text-base ">
                    {`Your score reflects your current investment in Digital Transformation and
                    highlights areas for improvement in People, Process, or Technology. Lower
                    scores are common without initiatives like Service Improvement Programs
                    (SIPs) or Continual Service Improvement (CSI). Organizations rarely exceed
                    a score of 3 or 4 without significant investment in all three areas. Use
                    these results to guide strategic discussions on where to focus next,
                    identify overlooked areas, and recognize successes to advance your
                    Digital Transformation.`}
                </p>
            </div>
            <div>
                <h3 className="text-3xl font-bold flex items-center">
                    The Next Step
                </h3>
                <p className="mt-3 text-base mb-8">
                    {`Your next step in the Digital Transformation journey involves using this
                    report to prioritize key areas for improvement. To support your efforts, you
                    can schedule a complimentary walk-through with one of our experts. For a more in-depth
                    analysis, Mana'o Pili offers tailored recommendation plans focused on
                    specific processes or modules of interest.`}
                </p>
            </div>
        </div>
    );
}
