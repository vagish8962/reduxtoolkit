import { createAction } from '@reduxjs/toolkit';

export const addList = createAction<{ title: any; author: any; rating: any; id: string; }>('addList');
export const deleteList = createAction('deleteList');
