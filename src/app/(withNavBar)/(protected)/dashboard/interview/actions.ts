'use server';

interface SubmissionCount {
  difficulty: string;
  count: number;
  submission: number;
}

export interface ProblemProgressData {
  solvedProblem: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalSubmissionNum: SubmissionCount[];
  acSubmissionNum: SubmissionCount[];
}

export interface SubmissionHistoryData {
  count: number;
  submission: ProblemSubmission[];
}

export interface ProblemSubmission {
  title: string;
  titleSlug: string;
  timestamp: string;
  statusDisplay: string;
  lang: string;
}

export interface ProblemsetData {
  totalQuestion: number;
  count: 50;
  problemsetQuestionList: Problem[];
}

export interface Problem {
  acRate: number;
  difficulty: string;
  // freqBar: null;
  // questionFrontendId: "1";
  // isFavor: false;
  // isPaidOnly: false;
  // status: null;
  title: string;
  titleSlug: string;
  topicTags: string[];
  // "hasSolution": true;
  // "hasVideoSolution": true
}

async function fetchAndParse(url: string) {
  const res = await fetch(url);
  // console.log('fetching: ', res);
  return await res.json();
}

export async function getProblemsProgress(): Promise<ProblemProgressData> {
  return await fetchAndParse('http://localhost:4000/uwi/solved');
}

export async function getContestHistory() {
  const res = await fetch('http://localhost:4000/uwi/contest/history');
  return await res.json();
}

export async function getSubmissionHistory(): Promise<SubmissionHistoryData> {
  return await fetchAndParse('http://localhost:4000/uwi/acSubmission');
}

export async function getProblemset(): Promise<ProblemsetData> {
  return await fetchAndParse('http://localhost:4000/problems?limit=50');
}
