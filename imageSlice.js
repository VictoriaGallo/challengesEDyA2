import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ref, uploadBytes, deleteObject, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/credentials';

export const uploadImage = createAsyncThunk(
    'images/uploadImage',
    async (file, { rejectWithValue }) => {
        try {
            const imageRef = ref(storage, `images/${file.name}`);
            const snapshot = await uploadBytes(imageRef, file);
            const url = await getDownloadURL(snapshot.ref);
            return { name: file.name, url };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteImage = createAsyncThunk(
    'images/deleteImage',
    async (imageName, { rejectWithValue }) => {
        try {
            const imageRef = ref(storage, `images/${imageName}`);
            await deleteObject(imageRef);
            return imageName;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const imageSlice = createSlice({
    name: 'images',
    initialState: {
        images: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(uploadImage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(uploadImage.fulfilled, (state, action) => {
                state.loading = false;
                state.images.push(action.payload);
            })
            .addCase(uploadImage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteImage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteImage.fulfilled, (state, action) => {
                state.loading = false;
                state.images = state.images.filter((img) => img.name !== action.payload);
            })
            .addCase(deleteImage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default imageSlice.reducer;
