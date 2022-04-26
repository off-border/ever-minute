export async function testStorage(createStorage) {
    const setup = async () => {
        const storage = createStorage({ modelName: 'test-model' });

        const storedRecordId = storage.create({ storedField: 'field-stored' });

        return { storage, storedRecordId };
    };

    it('create()', async () => {
        const { storage } = await setup();

        const id = await storage.create({ field1: 'field-1' });
        const saved = await storage.read(id);

        expect(saved).toEqual({ id, field1: 'field-1' });
    });

    it('read()', async () => {
        const { storage, storedRecordId } = await setup();
        const saved = await storage.read(storedRecordId);

        expect(saved).toEqual({ id: storedRecordId, storedField: 'field-stored' });
    });

    it('update()', async () => {
        const { storage, storedRecordId } = await setup();

        await storage.update(storedRecordId, { storedField: 'field-updated', newField: 'new-field' });
        const saved = await storage.read(storedRecordId);

        expect(saved).toEqual({ id: storedRecordId, storedField: 'field-updated', newField: 'new-field' });
    });
}
