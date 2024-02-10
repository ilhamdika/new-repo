<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            'income',
            'expense',
        ];

        foreach ($categories as $category) {
            \App\Models\Ms_category::create([
                'name' => $category,
            ]);
        }
    }
}
