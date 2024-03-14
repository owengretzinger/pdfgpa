import { atom } from 'jotai';

export const gpaAtom = atom(-1);
export const gpaStringAtom = atom((get) => {
  const gpa = get(gpaAtom);
  return gpa === -1 ? 'N/A' : gpa.toFixed(2);
});

export type CourseT = {
  grade: string;
  high_grade: boolean;
  name: string;
}[];
export const courselistAtom = atom<CourseT>([]);

export type UploadStatusT = 'waiting' | 'processing' | 'success' | 'error';
export const uploadStatusAtom = atom<UploadStatusT>('waiting');

export const uploadFileAtom = atom(null, async (get, set, file: File) => {
  const formData = new FormData();
  formData.append('transcript_file', file);
  set(uploadStatusAtom, 'processing');
  try {
    const response = await fetch('https://cafentson.pythonanywhere.com/gpa', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    set(gpaAtom, data.gpa);
    set(courselistAtom, data.course_list);
    set(uploadStatusAtom, 'success');
  } catch (error) {
    set(uploadStatusAtom, 'error');
    console.error(error);
  }
});

export const resetAllAtom = atom(null, (get, set) => {
  set(gpaAtom, -1);
  set(courselistAtom, []);
  set(uploadStatusAtom, 'waiting');
});
